export const GetHeaderImagem = async () => {
  try {
    const headers = {
      "content-type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    };

    const requestBody = {
      query: `query GetHeaderImage {
        imagens(skip: 0) {
          imagem {
            url
            id
          }
          title
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
 
    return response?.data?.imagens;
  } catch (error) {
    return error;
  }
};
