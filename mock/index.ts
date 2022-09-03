export default [
    {
      url: "/login",
      method: "post",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: {
            token: 'fakeToken'
          }
        };
      }
    },
    {
        url: "/getUserInfo",
        method: "post",
        response: () => {
            return {
                code: 200,
                message: "ok",
                data: {
                    user: {
                        name: '小红'
                    }
                }
            }
        }
    }
  ];
  