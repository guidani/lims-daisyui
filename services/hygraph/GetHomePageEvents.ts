export const GetHomePageEvents = async () => {
  try {
    const headers = {
      "content-type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    };

    const requestBody = {
      query: `query GetHomePageEvents {
        eventos (last: 3) {
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
    return response?.data?.eventos;
  } catch (error) {
    return error;
  }
};
