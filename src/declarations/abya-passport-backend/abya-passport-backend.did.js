export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getDidForPrincipal' : IDL.Func([IDL.Principal], [IDL.Text], []),
    'getMyDid' : IDL.Func([], [IDL.Text], []),
    'getMyIssuedVCs' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getVC' : IDL.Func([IDL.Text], [IDL.Opt(IDL.Text)], []),
    'getVCsForDid' : IDL.Func([IDL.Text], [IDL.Vec(IDL.Text)], []),
    'issueVC' : IDL.Func(
        [IDL.Text, IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)), IDL.Opt(IDL.Nat)],
        [IDL.Text],
        [],
      ),
    'resolveDid' : IDL.Func([IDL.Text], [IDL.Text], []),
    'revokeVC' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'verifyVC' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'signatureValid' : IDL.Bool,
            'isExpired' : IDL.Bool,
            'errors' : IDL.Vec(IDL.Text),
            'isValid' : IDL.Bool,
            'issuerValid' : IDL.Bool,
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
