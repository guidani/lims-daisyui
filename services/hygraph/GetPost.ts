export const GetPost = async (slug: string) => {
  try {
    const headers = {
      "content-type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    };

    const requestBody = {
      query: `query GetPostagem {
        postagem(where: {slug: "${slug}"}) {
          imagem {
            url
            id
          }
          conteudo {
            text
          }
          title
          resumo
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
    
    return response?.data?.postagem;
  } catch (error) {
    return error;
  }
};
