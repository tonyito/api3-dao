/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StateUtils } from "../StateUtils";

export class StateUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<StateUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<StateUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): StateUtils {
    return super.attach(address) as StateUtils;
  }
  connect(signer: Signer): StateUtils__factory {
    return super.connect(signer) as StateUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StateUtils {
    return new Contract(address, _abi, signerOrProvider) as StateUtils;
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
  "0x60c0604052622503f660809081525062093a8060a090815250620f42406008556305f5e100600955622625a0600a5563047868c0600b556a084595161401484a000000600c55620f4240600d55600a5460115534801561005e57600080fd5b506040516122073803806122078339818101604052602081101561008157600080fd5b8101908080519060200190929190505050600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060805160a05161204f6101b8600039806108cb528061091352806113ab525080610d4052806111535280611618525061204f6000f3fe608060405234801561001057600080fd5b50600436106101575760003560e01c806362bc7855116100c3578063a87430ba1161007c578063a87430ba14610573578063ca093047146105e7578063decac4f514610629578063ee677b3614610647578063eebb1980146106a9578063f4dadc61146106f257610157565b806362bc78551461040357806370a0823114610445578063784b3c5d1461049d57806392093b36146104bb578063981b24d0146104d9578063a09862d51461051b57610157565b80632eebce2c116101155780632eebce2c146102a557806339a288bd146102f357806341cb8c201461033c5780634eb05c47146103855780634f322ae8146103a357806358780938146103c157610157565b806201e8621461015c57806310664413146101be57806313f2dad0146101dc57806318160ddd1461022557806320a0a0e9146102435780632dd5090c14610261575b600080fd5b6101a86004803603604081101561017257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061073b565b6040518082815260200191505060405180910390f35b6101c66107ff565b6040518082815260200191505060405180910390f35b610208600480360360208110156101f257600080fd5b8101908080359060200190929190505050610805565b604051808381526020018281526020019250505060405180910390f35b61022d610836565b6040518082815260200191505060405180910390f35b61024b6108c9565b6040518082815260200191505060405180910390f35b61028d6004803603602081101561027757600080fd5b81019080803590602001909291905050506108ed565b60405180821515815260200191505060405180910390f35b6102f1600480360360408110156102bb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061090d565b005b61031f6004803603602081101561030957600080fd5b8101908080359060200190929190505050610e6b565b604051808381526020018281526020019250505060405180910390f35b6103686004803603602081101561035257600080fd5b8101908080359060200190929190505050610e9c565b604051808381526020018281526020019250505060405180910390f35b61038d610ecd565b6040518082815260200191505060405180910390f35b6103ab610ed3565b6040518082815260200191505060405180910390f35b6103ed600480360360208110156103d757600080fd5b8101908080359060200190929190505050610ed9565b6040518082815260200191505060405180910390f35b61042f6004803603602081101561041957600080fd5b8101908080359060200190929190505050610efa565b6040518082815260200191505060405180910390f35b6104876004803603602081101561045b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f12565b6040518082815260200191505060405180910390f35b6104a5610fc4565b6040518082815260200191505060405180910390f35b6104c3610fca565b6040518082815260200191505060405180910390f35b610505600480360360208110156104ef57600080fd5b8101908080359060200190929190505050610fd0565b6040518082815260200191505060405180910390f35b61055d6004803603602081101561053157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061104e565b6040518082815260200191505060405180910390f35b6105b56004803603602081101561058957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611103565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b610613600480360360208110156105fd57600080fd5b8101908080359060200190929190505050611139565b6040518082815260200191505060405180910390f35b610631611151565b6040518082815260200191505060405180910390f35b6106936004803603604081101561065d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611175565b6040518082815260200191505060405180910390f35b6106d5600480360360208110156106bf57600080fd5b810190808035906020019092919050505061123e565b604051808381526020018281526020019250505060405180910390f35b61071e6004803603602081101561070857600080fd5b810190808035906020019092919050505061126f565b604051808381526020018281526020019250505060405180910390f35b6000806107f3600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b828210156107e9578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906107a3565b50505050856112a0565b90508091505092915050565b600d5481565b6002818154811061081257fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60003073ffffffffffffffffffffffffffffffffffffffff1663981b24d0436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561088957600080fd5b505afa15801561089d573d6000803e3d6000fd5b505050506040513d60208110156108b357600080fd5b8101908080519060200190929190505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600e6020528060005260406000206000915054906101000a900460ff1681565b600e60007f0000000000000000000000000000000000000000000000000000000000000000428161093a57fe5b04815260200190815260200160002060009054906101000a900460ff166109645761096361139f565b5b61096c611fa8565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020016000905b82821015610a2b578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906109e5565b50505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506000610a6d8260200151436112a0565b90506000826040015190506000836060015190506000811415610a8f57600190505b60606002805480602002602001604051908101604052809291908181526020016000905b82821015610af957838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610ab3565b50505050905060006004805490501115610c545760606004805480602002602001604051908101604052809291908181526020016000905b82821015610b7757838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610b31565b505050509050600081600081518110610b8c57fe5b6020026020010151600001516001850310610bb6576001610bb08360018703611730565b01610bb9565b60005b90505b815181108015610be2575087828281518110610bd457fe5b602002602001015160000151105b15610c5157610bef611fde565b828281518110610bfb57fe5b602002602001015190506000610c158583600001516112a0565b90506000610c2b8a6020015184600001516112a0565b9050818184602001510281610c3c57fe5b04880197505050508080600101915050610bbc565b50505b60006005805490501115610dd45760606005805480602002602001604051908101604052809291908181526020016000905b82821015610ccc57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610c86565b505050509050600081600081518110610ce157fe5b6020026020010151600001516001850310610d0b576001610d058360018703611730565b01610d0e565b60005b90505b815181108015610d37575087828281518110610d2957fe5b602002602001015160000151105b15610dd15760007f0000000000000000000000000000000000000000000000000000000000000000838381518110610d6b57fe5b6020026020010151600001510390506000610d8685836112a0565b90506000610d988a60200151846112a0565b90508181868681518110610da857fe5b6020026020010151602001510281610dbc57fe5b04880397505050508080600101915050610d11565b50505b82600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555085600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555050505050505050565b60058181548110610e7857fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60038181548110610ea957fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600c5481565b60115481565b60078181548110610ee657fe5b906000526020600020016000915090505481565b60106020528060005260406000206000915090505481565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610f8257600080fd5b505afa158015610f96573d6000803e3d6000fd5b505050506040513d6020811015610fac57600080fd5b81019080805190602001909291905050509050919050565b600a5481565b600b5481565b60006110476003805480602002602001604051908101604052809291908181526020016000905b8282101561103d57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610ff7565b50505050836112a0565b9050919050565b60003073ffffffffffffffffffffffffffffffffffffffff1663ee677b3683436040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156110c157600080fd5b505af11580156110d5573d6000803e3d6000fd5b505050506040513d60208110156110eb57600080fd5b81019080805190602001909291905050509050919050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060050154905085565b600f6020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000611181838361090d565b611236600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b8282101561122c578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906111e6565b50505050836112a0565b905092915050565b6006818154811061124b57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6004818154811061127c57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600080835114156112b45760009050611399565b826001845103815181106112c457fe5b60200260200101516000015182106112f957826001845103815181106112e657fe5b6020026020010151602001519050611399565b8260008151811061130657fe5b6020026020010151600001518210156113225760009050611399565b600080600185510390505b8181111561137c57600060026001848401018161134657fe5b0490508486828151811061135657fe5b6020026020010151600001511161136f57809250611376565b6001810391505b5061132d565b84828151811061138857fe5b602002602001015160200151925050505b92915050565b6113a76117c6565b60007f000000000000000000000000000000000000000000000000000000000000000042816113d257fe5b04905060006003600160038054905003815481106113ec57fe5b906000526020600020906002020160010154905060006305f5e100603460115484028161141557fe5b048161141d57fe5b0490506001600e600085815260200190815260200160002060006101000a81548160ff02191690831515021790555043601060008581526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156114eb57600080fd5b505afa1580156114ff573d6000803e3d6000fd5b505050506040513d602081101561151557600080fd5b81019080805190602001909291905050506115325750505061172e565b60008114156115435750505061172e565b80600f600085815260200190815260200160002081905550600360405180604001604052804381526020018385018152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506004604051806040016040528043815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600560405180604001604052807f0000000000000000000000000000000000000000000000000000000000000000430181526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561171257600080fd5b505af1158015611726573d6000803e3d6000fd5b505050505050505b565b60008260018451038151811061174257fe5b602002602001015160000151821061176057600183510390506117c0565b600080600185510390505b818111156117ba57600060026001848401018161178457fe5b0490508486828151811061179457fe5b602002602001015160000151116117ad578092506117b4565b6001810391505b5061176b565b81925050505b92915050565b60006003600160038054905003815481106117dd57fe5b906000526020600020906002020160010154905080600c54101561180a57600a5460118190555050611a23565b6000600c54821061182f5761182a600c5483611a2590919063ffffffff16565b611845565b61184482600c54611a2590919063ffffffff16565b5b90506000611872600c5461186460095485611a6f90919063ffffffff16565b611af590919063ffffffff16565b9050600061189f600854611891600d5485611a6f90919063ffffffff16565b611af590919063ffffffff16565b90506118df6040518060400160405280601381526020017f434f4e54524143545f4150525f55504441544500000000000000000000000000815250611b3f565b6118e881611c3d565b61192560095461191761190660095485611cd690919063ffffffff16565b601154611a6f90919063ffffffff16565b611af590919063ffffffff16565b6011819055506119696040518060400160405280601581526020017f434f4e54524143545f42454c4f575f5441524745540000000000000000000000815250611b3f565b611976600c548510611d5e565b6119b46040518060400160405280601181526020017f434f4e54524143545f4150525f43414c43000000000000000000000000000000815250611b3f565b6119bf601154611c3d565b600b5460115411156119d557600b546011819055505b611a136040518060400160405280601081526020017f434f4e54524143545f4e45575f41505200000000000000000000000000000000815250611b3f565b611a1e601154611c3d565b505050505b565b6000611a6783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611df9565b905092915050565b600080831415611a825760009050611aef565b6000828402905082848281611a9357fe5b0414611aea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611ff96021913960400191505060405180910390fd5b809150505b92915050565b6000611b3783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611eb9565b905092915050565b611c3a816040516024018080602001828103825283818151815260200191508051906020019080838360005b83811015611b86578082015181840152602081019050611b6b565b50505050905090810190601f168015611bb35780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611f7f565b50565b611cd381604051602401808281526020019150506040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611f7f565b50565b600080828401905083811015611d54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b611df6816040516024018082151581526020019150506040516020818303038152906040527f32458eed000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611f7f565b50565b6000838311158290611ea6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611e6b578082015181840152602081019050611e50565b50505050905090810190601f168015611e985780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290611f65576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f2a578082015181840152602081019050611f0f565b50505050905090810190601f168015611f575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611f7157fe5b049050809150509392505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6040518060c001604052806000815260200160608152602001600081526020016000815260200160008152602001600081525090565b60405180604001604052806000815260200160008152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212202b261cdd10623aec20f9629383342c6176ee5238e781956bcae12c567297a44664736f6c634300060c0033";
