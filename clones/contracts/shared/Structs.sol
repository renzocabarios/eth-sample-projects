// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

struct ProjectData {
    address tokenAddress;
    address fundWallet;
    string metadata;
    // string projectName;
    // string listerName;
    // string projectDescription;
    // string projectLogo; // IPFS Hash
    // string projectBanner; // IPFS Hash
    // string website;
    uint256 startTime;
    bool isActive;
    bytes whitelist;
    // Socials socials;
    FundingData[] fundingData;
    VestingData vestingData;
}

// struct Socials {
//     string facebook;
//     string twitter;
//     string discord;
//     string telegram;
// }

struct FundingData {
    uint256 hardCap;
    uint256 softCap;
    uint256 supply;
    uint256 fundsRaised;
    uint128 endTime;
}

struct VestingData {
    uint256 vestingStartTime;
    uint256 vestingIterations;
    uint256 vestingDays;
}

struct UserData {
    uint256 totalAllocation;
    uint256 claimedIterations;
}
