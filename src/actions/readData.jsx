const readData = async () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  try {
    const response = await fetch(`${serverUrl}/api/data`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    console.log("fetched data: ", json);
    return json;
  } catch (err) {
    console.error(`Failed to fetch data from ${serverUrl}/api/data: `, err);
  }
};

export { readData };
