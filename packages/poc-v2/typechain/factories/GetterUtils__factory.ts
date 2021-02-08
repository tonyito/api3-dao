/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GetterUtils } from "../GetterUtils";

export class GetterUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    api3TokenAddress: string,
    overrides?: Overrides
  ): Promise<GetterUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<GetterUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): GetterUtils {
    return super.attach(address) as GetterUtils;
  }
  connect(signer: Signer): GetterUtils__factory {
    return super.connect(signer) as GetterUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GetterUtils {
    return new Contract(address, _abi, signerOrProvider) as GetterUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleaseReferenceBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleases",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "locks",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardPaidForEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardReleases",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalDepositsAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "updateAndGetBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "updateAndGetBalanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetBlock",
        type: "uint256",
      },
    ],
    name: "updateUserState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastStateUpdateTargetBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052622503f660809081525062093a8060a090815250620f42406008556305f5e100600955622625a0600a5563047868c0600b556a084595161401484a000000600c55620f4240600d55600a5460115534801561005e57600080fd5b506040516120193803806120198339818101604052602081101561008157600080fd5b810190808051906020019092919050505080600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505060805160a051611e5f6101ba600039806109da5280610a22528061153a525080610e3d52806112e252806117a75250611e5f6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806362bc7855116100de578063a09862d511610097578063decac4f511610071578063decac4f5146106bf578063ee677b36146106dd578063eebb19801461073f578063f4dadc61146107885761018d565b8063a09862d5146105b1578063a87430ba14610609578063ca0930471461067d5761018d565b806362bc78551461047b57806370a08231146104bd578063784b3c5d146105155780637d8820971461053357806392093b3614610551578063981b24d01461056f5761018d565b80632dd5090c1161014b57806341cb8c201161012557806341cb8c20146103b45780634eb05c47146103fd5780634f322ae81461041b57806358780938146104395761018d565b80632dd5090c146102d95780632eebce2c1461031d57806339a288bd1461036b5761018d565b806201e8621461019257806310664413146101f457806313f2dad01461021257806315ab4a221461025b57806318160ddd1461029d57806320a0a0e9146102bb575b600080fd5b6101de600480360360408110156101a857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107d1565b6040518082815260200191505060405180910390f35b6101fc610890565b6040518082815260200191505060405180910390f35b61023e6004803603602081101561022857600080fd5b8101908080359060200190929190505050610896565b604051808381526020018281526020019250505060405180910390f35b6102876004803603602081101561027157600080fd5b81019080803590602001909291905050506108c7565b6040518082815260200191505060405180910390f35b6102a5610945565b6040518082815260200191505060405180910390f35b6102c36109d8565b6040518082815260200191505060405180910390f35b610305600480360360208110156102ef57600080fd5b81019080803590602001909291905050506109fc565b60405180821515815260200191505060405180910390f35b6103696004803603604081101561033357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a1c565b005b6103976004803603602081101561038157600080fd5b8101908080359060200190929190505050610f67565b604051808381526020018281526020019250505060405180910390f35b6103e0600480360360208110156103ca57600080fd5b8101908080359060200190929190505050610f98565b604051808381526020018281526020019250505060405180910390f35b610405610fc9565b6040518082815260200191505060405180910390f35b610423610fcf565b6040518082815260200191505060405180910390f35b6104656004803603602081101561044f57600080fd5b8101908080359060200190929190505050610fd5565b6040518082815260200191505060405180910390f35b6104a76004803603602081101561049157600080fd5b8101908080359060200190929190505050610ff6565b6040518082815260200191505060405180910390f35b6104ff600480360360208110156104d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061100e565b6040518082815260200191505060405180910390f35b61051d6110c0565b6040518082815260200191505060405180910390f35b61053b6110c6565b6040518082815260200191505060405180910390f35b610559611159565b6040518082815260200191505060405180910390f35b61059b6004803603602081101561058557600080fd5b810190808035906020019092919050505061115f565b6040518082815260200191505060405180910390f35b6105f3600480360360208110156105c757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111dd565b6040518082815260200191505060405180910390f35b61064b6004803603602081101561061f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611292565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b6106a96004803603602081101561069357600080fd5b81019080803590602001909291905050506112c8565b6040518082815260200191505060405180910390f35b6106c76112e0565b6040518082815260200191505060405180910390f35b610729600480360360408110156106f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611304565b6040518082815260200191505060405180910390f35b61076b6004803603602081101561075557600080fd5b81019080803590602001909291905050506113cd565b604051808381526020018281526020019250505060405180910390f35b6107b46004803603602081101561079e57600080fd5b81019080803590602001909291905050506113fe565b604051808381526020018281526020019250505060405180910390f35b6000610888600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b8282101561087e57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610838565b505050508461142f565b905092915050565b600d5481565b600281815481106108a357fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600061093e6003805480602002602001604051908101604052809291908181526020016000905b82821015610934578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906108ee565b505050508361142f565b9050919050565b60003073ffffffffffffffffffffffffffffffffffffffff1663981b24d0436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561099857600080fd5b505afa1580156109ac573d6000803e3d6000fd5b505050506040513d60208110156109c257600080fd5b8101908080519060200190929190505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600e6020528060005260406000206000915054906101000a900460ff1681565b600e60007f00000000000000000000000000000000000000000000000000000000000000004281610a4957fe5b04815260200190815260200160002060009054906101000a900460ff16610a7357610a7261152e565b5b610a7b611db8565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020016000905b82821015610b3a57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610af4565b50505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506000816040015190506000826060015190506000811415610b8c57600190505b60606002805480602002602001604051908101604052809291908181526020016000905b82821015610bf657838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610bb0565b50505050905060006004805490501115610d515760606004805480602002602001604051908101604052809291908181526020016000905b82821015610c7457838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610c2e565b505050509050600081600081518110610c8957fe5b6020026020010151600001516001850310610cb3576001610cad83600187036118bf565b01610cb6565b60005b90505b815181108015610cdf575086828281518110610cd157fe5b602002602001015160000151105b15610d4e57610cec611dee565b828281518110610cf857fe5b602002602001015190506000610d1285836000015161142f565b90506000610d288960200151846000015161142f565b9050818184602001510281610d3957fe5b04880197505050508080600101915050610cb9565b50505b60006005805490501115610ed15760606005805480602002602001604051908101604052809291908181526020016000905b82821015610dc957838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610d83565b505050509050600081600081518110610dde57fe5b6020026020010151600001516001850310610e08576001610e0283600187036118bf565b01610e0b565b60005b90505b815181108015610e34575086828281518110610e2657fe5b602002602001015160000151105b15610ece5760007f0000000000000000000000000000000000000000000000000000000000000000838381518110610e6857fe5b6020026020010151600001510390506000610e83858361142f565b90506000610e9589602001518461142f565b90508181868681518110610ea557fe5b6020026020010151602001510281610eb957fe5b04880397505050508080600101915050610e0e565b50505b82600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555084600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030181905550505050505050565b60058181548110610f7457fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60038181548110610fa557fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600c5481565b60115481565b60078181548110610fe257fe5b906000526020600020016000915090505481565b60106020528060005260406000206000915090505481565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561107e57600080fd5b505afa158015611092573d6000803e3d6000fd5b505050506040513d60208110156110a857600080fd5b81019080805190602001909291905050509050919050565b600a5481565b60003073ffffffffffffffffffffffffffffffffffffffff166315ab4a22436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561111957600080fd5b505afa15801561112d573d6000803e3d6000fd5b505050506040513d602081101561114357600080fd5b8101908080519060200190929190505050905090565b600b5481565b60006111d66002805480602002602001604051908101604052809291908181526020016000905b828210156111cc57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611186565b505050508361142f565b9050919050565b60003073ffffffffffffffffffffffffffffffffffffffff1663ee677b3683436040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561125057600080fd5b505af1158015611264573d6000803e3d6000fd5b505050506040513d602081101561127a57600080fd5b81019080805190602001909291905050509050919050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060050154905085565b600f6020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006113108383610a1c565b6113c5600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b828210156113bb57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611375565b505050508361142f565b905092915050565b600681815481106113da57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6004818154811061140b57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600080835114156114435760009050611528565b8260018451038151811061145357fe5b6020026020010151600001518210611488578260018451038151811061147557fe5b6020026020010151602001519050611528565b8260008151811061149557fe5b6020026020010151600001518210156114b15760009050611528565b600080600185510390505b8181111561150b5760006002600184840101816114d557fe5b049050848682815181106114e557fe5b602002602001015160000151116114fe57809250611505565b6001810391505b506114bc565b84828151811061151757fe5b602002602001015160200151925050505b92915050565b611536611955565b60007f0000000000000000000000000000000000000000000000000000000000000000428161156157fe5b049050600060036001600380549050038154811061157b57fe5b906000526020600020906002020160010154905060006305f5e10060346011548402816115a457fe5b04816115ac57fe5b0490506001600e600085815260200190815260200160002060006101000a81548160ff02191690831515021790555043601060008581526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561167a57600080fd5b505afa15801561168e573d6000803e3d6000fd5b505050506040513d60208110156116a457600080fd5b81019080805190602001909291905050506116c1575050506118bd565b60008114156116d2575050506118bd565b80600f600085815260200190815260200160002081905550600360405180604001604052804381526020018385018152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506004604051806040016040528043815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600560405180604001604052807f0000000000000000000000000000000000000000000000000000000000000000430181526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156118a157600080fd5b505af11580156118b5573d6000803e3d6000fd5b505050505050505b565b6000826001845103815181106118d157fe5b60200260200101516000015182106118ef576001835103905061194f565b600080600185510390505b8181111561194957600060026001848401018161191357fe5b0490508486828151811061192357fe5b6020026020010151600001511161193c57809250611943565b6001810391505b506118fa565b81925050505b92915050565b600060036001600380549050038154811061196c57fe5b906000526020600020906002020160010154905080600c54101561199957600a5460118190555050611a8e565b6000600c5482106119be576119b9600c5483611a9090919063ffffffff16565b6119d4565b6119d382600c54611a9090919063ffffffff16565b5b90506000611a01600c546119f360095485611ada90919063ffffffff16565b611b6090919063ffffffff16565b90506000611a2e600854611a20600d5485611ada90919063ffffffff16565b611b6090919063ffffffff16565b9050611a6d600954611a5f611a4e60095485611baa90919063ffffffff16565b601154611ada90919063ffffffff16565b611b6090919063ffffffff16565b601181905550600b546011541115611a8957600b546011819055505b505050505b565b6000611ad283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611c32565b905092915050565b600080831415611aed5760009050611b5a565b6000828402905082848281611afe57fe5b0414611b55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611e096021913960400191505060405180910390fd5b809150505b92915050565b6000611ba283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611cf2565b905092915050565b600080828401905083811015611c28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000838311158290611cdf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ca4578082015181840152602081019050611c89565b50505050905090810190601f168015611cd15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290611d9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d63578082015181840152602081019050611d48565b50505050905090810190601f168015611d905780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611daa57fe5b049050809150509392505050565b6040518060c001604052806000815260200160608152602001600081526020016000815260200160008152602001600081525090565b60405180604001604052806000815260200160008152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220f16c65dc0bc0083a2f8494b0c0614e96ae945558e97023b365f47075c6d8399c64736f6c634300060c0033";