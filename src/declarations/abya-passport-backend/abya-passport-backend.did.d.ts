import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'getDidForPrincipal' : ActorMethod<[Principal], string>,
  'getMyDid' : ActorMethod<[], string>,
  'getMyIssuedVCs' : ActorMethod<[], Array<string>>,
  'getVC' : ActorMethod<[string], [] | [string]>,
  'getVCsForDid' : ActorMethod<[string], Array<string>>,
  'issueVC' : ActorMethod<
    [string, Array<[string, string]>, [] | [bigint]],
    string
  >,
  'resolveDid' : ActorMethod<[string], string>,
  'revokeVC' : ActorMethod<[string], boolean>,
  'verifyVC' : ActorMethod<
    [string],
    {
      'signatureValid' : boolean,
      'isExpired' : boolean,
      'errors' : Array<string>,
      'isValid' : boolean,
      'issuerValid' : boolean,
    }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
