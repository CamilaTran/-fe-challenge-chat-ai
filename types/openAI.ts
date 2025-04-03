export interface Chat {
  created: number;
  id: string;
  object: "model";
  owned_by: "system";
}

export interface ChatDetail extends Chat {
  name: string;
}

export interface VerifyKeyResponseSucess {
  data: Array<Chat>;
  object: "list";
}

export interface ResponseFail {
  error: {
    message: "string";
    type: string;
    params: null;
    code: string
  }
}

