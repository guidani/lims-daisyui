export const GetAllEvents = async () => {
  try {
    const headers = {
      "content-type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    };

    const requestBody = {
      query: `query GetAllEvents {
        eventos {
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
    console.log(response?.data);
    return response?.data?.limsimagens;
  } catch (error) {
    return error;
  }
};
