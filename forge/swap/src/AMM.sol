// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract AMM {

    IERC20 public tokenA;
    IERC20 public tokenB;

    uint256 public reserveA;
    uint256 public reserveB;

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }

    function addLiquidity(uint256 amountA, uint256 amountB) external {
        tokenA.transferFrom(msg.sender, address(this), amountA);
        tokenB.transferFrom(msg.sender, address(this), amountB);

        reserveA += amountA;
        reserveB += amountB;
    }

    function removeLiquidity(uint256 amountA, uint256 amountB) external {
        require(reserveA >= amountA && reserveB >= amountB, "Insufficient reserves");

        reserveA -= amountA;
        reserveB -= amountB;

        tokenA.transfer(msg.sender, amountA);
        tokenB.transfer(msg.sender, amountB);
    }

    function swapAForB(uint256 amountIn) external returns (uint256 amountOut) {
        require(amountIn > 0, "Amount must be greater than zero");

        amountOut = (reserveB * amountIn) / (reserveA + amountIn);

        tokenA.transferFrom(msg.sender, address(this), amountIn);
        tokenB.transfer(msg.sender, amountOut);

        reserveA += amountIn;
        reserveB -= amountOut;
    }

    function swapBForA(uint256 amountIn) external returns (uint256 amountOut) {
        require(amountIn > 0, "Amount must be greater than zero");

        uint256 amountInWithFee = (amountIn * 997) / 1000; // 0.3% fee
        amountOut = (reserveA * amountInWithFee) / (reserveB + amountInWithFee);

        tokenB.transferFrom(msg.sender, address(this), amountIn);
        tokenA.transfer(msg.sender, amountOut);

        reserveB += amountInWithFee;
        reserveA -= amountOut;
    }
}
