export const GetHeaderImagem = async () => {
  try {
    const headers = {
      "content-type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    };

    const requestBody = {
      query: `query Imagens {
        limsimagens (where: {id: "clobqvexr2ygy0bkoee97yakt"}) {
          imagem {
            url
            id
          }
        }
      }`,
    };

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const response = await (
      await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL || "", options)
    ).json();
    console.log(response?.data.imagem.url);
    return response?.data?.limsimagens;
  } catch (error) {
    return error;
  }
};
