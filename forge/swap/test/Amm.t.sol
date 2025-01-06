// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";
import {AMM} from "../src/AMM.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MockERC20 is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}


contract AMMTest is Test {
    AMM public amm;
    MockERC20 public tokenA;
    MockERC20 public tokenB;

    address user = address(0x123);
    function setUp() public {
        tokenA = new MockERC20("US Dollar Coin", "USDC");
        tokenB = new MockERC20("Core Dao", "CORE");
        amm = new AMM(address(tokenA), address(tokenB));
    }

    function test_mint_a() public {
        tokenA.mint(user, 1000 ether);
        assertEq(tokenA.balanceOf(user), 1000 ether);
    }

    function test_mint_b() public {
        tokenB.mint(user, 1000 ether);
        assertEq(tokenB.balanceOf(user), 1000 ether);
    }

    function testAddLiquidity() public {

        tokenA.mint(user, 1000 ether);
        tokenB.mint(user, 1000 ether);

        vm.startPrank(user);

        tokenA.approve(address(amm), type(uint256).max);
        tokenB.approve(address(amm), type(uint256).max);

        amm.addLiquidity(500 ether, 500 ether);

        assertEq(tokenA.balanceOf(address(amm)), 500 ether);
        assertEq(tokenB.balanceOf(address(amm)), 500 ether);
    }

    function testSwap() public {
        tokenA.mint(user, 1000 ether);
        tokenB.mint(user, 1000 ether);
        
        vm.startPrank(user);

        tokenA.approve(address(amm), type(uint256).max);
        tokenB.approve(address(amm), type(uint256).max);

        amm.addLiquidity(500 ether, 500 ether);

       
        console.log("USDC Price: ", amm.reserveB() / amm.reserveA());
        console.log("CORE Price: ", amm.reserveB() / amm.reserveA());

        amm.swapAForB(500 ether);

        assertEq(tokenB.balanceOf(user), 750 ether);
    }

}
