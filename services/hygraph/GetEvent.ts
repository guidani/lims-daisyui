export const GetEvento = async (slug: string) => {
  try {
    const headers = {
      "content-type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    };

    const requestBody = {
      query: `query GetEvento {
        evento(where: {slug: "${slug}"}) {
          conteudo {
            text
          }
          imagem {
            id
            url
          }
          resumo
          title
          slug
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
    
    return response?.data?.evento;
  } catch (error) {
    return error;
  }
};
