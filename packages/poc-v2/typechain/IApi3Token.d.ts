/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IApi3TokenInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "getBurnerStatus(address)": FunctionFragment;
    "getMinterStatus(address)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "updateBurnerStatus(bool)": FunctionFragment;
    "updateMinterStatus(address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getBurnerStatus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinterStatus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBurnerStatus",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinterStatus",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBurnerStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinterStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBurnerStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinterStatus",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "BurnerStatusUpdated(address,bool)": EventFragment;
    "MinterStatusUpdated(address,bool)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BurnerStatusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterStatusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class IApi3Token extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IApi3TokenInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getBurnerStatus(
      burnerAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { burnerStatus: boolean }>;

    "getBurnerStatus(address)"(
      burnerAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { burnerStatus: boolean }>;

    getMinterStatus(
      minterAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { minterStatus: boolean }>;

    "getMinterStatus(address)"(
      minterAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { minterStatus: boolean }>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateBurnerStatus(
      burnerStatus: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateBurnerStatus(bool)"(
      burnerStatus: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateMinterStatus(
      minterAddress: string,
      minterStatus: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateMinterStatus(address,bool)"(
      minterAddress: string,
      minterStatus: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getBurnerStatus(
    burnerAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "getBurnerStatus(address)"(
    burnerAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getMinterStatus(
    minterAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "getMinterStatus(address)"(
    minterAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,uint256)"(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateBurnerStatus(
    burnerStatus: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateBurnerStatus(bool)"(
    burnerStatus: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateMinterStatus(
    minterAddress: string,
    minterStatus: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateMinterStatus(address,bool)"(
    minterAddress: string,
    minterStatus: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "burn(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getBurnerStatus(
      burnerAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "getBurnerStatus(address)"(
      burnerAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getMinterStatus(
      minterAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "getMinterStatus(address)"(
      minterAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateBurnerStatus(
      burnerStatus: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateBurnerStatus(bool)"(
      burnerStatus: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMinterStatus(
      minterAddress: string,
      minterStatus: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateMinterStatus(address,bool)"(
      minterAddress: string,
      minterStatus: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    BurnerStatusUpdated(
      burnerAddress: string | null,
      burnerStatus: null
    ): EventFilter;

    MinterStatusUpdated(
      minterAddress: string | null,
      minterStatus: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "burn(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getBurnerStatus(
      burnerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBurnerStatus(address)"(
      burnerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinterStatus(
      minterAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMinterStatus(address)"(
      minterAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateBurnerStatus(
      burnerStatus: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateBurnerStatus(bool)"(
      burnerStatus: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateMinterStatus(
      minterAddress: string,
      minterStatus: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateMinterStatus(address,bool)"(
      minterAddress: string,
      minterStatus: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getBurnerStatus(
      burnerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBurnerStatus(address)"(
      burnerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinterStatus(
      minterAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMinterStatus(address)"(
      minterAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateBurnerStatus(
      burnerStatus: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateBurnerStatus(bool)"(
      burnerStatus: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateMinterStatus(
      minterAddress: string,
      minterStatus: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateMinterStatus(address,bool)"(
      minterAddress: string,
      minterStatus: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
