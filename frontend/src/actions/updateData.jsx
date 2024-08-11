const updateData = async (data) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  try {
    const response = await fetch(`${serverUrl}/api/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    console.log("updated data: ", json);
    return json;
  } catch (err) {
    console.error(`Failed to update data at ${serverUrl}/api/update: `, err);
  }
};

export { updateData };
