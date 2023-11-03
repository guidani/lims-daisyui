export const GetAllPosts = async () => {
  try {
    const headers = {
      "content-type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    };

    const requestBody = {
      query: `query GetAllPostagens {
        postagems(skip: 0) {
          id
          slug
          title
          resumo
          imagem {
            id
            url
          }
        }
      }      
      `,
    };

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const response = await (
      await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL || "", options)
    ).json();
    return response?.data?.postagems;
  } catch (error) {
    return error;
  }
};
