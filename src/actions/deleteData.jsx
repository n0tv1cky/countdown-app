const serverUrl = import.meta.env.VITE_SERVER_URL;

const clearDescription = async (data) => {
  try {
    const response = await fetch(`${serverUrl}/api/data/clear-description`, {
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
    console.log("cleared description: ", json);
    return json;
  } catch (err) {
    console.error(
      `Failed to clear description at ${serverUrl}/api/data/clear-description: `,
      err
    );
  }
};

const clearDate = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/data/clear-date`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    console.log("cleared date: ", json);
    return json;
  } catch (err) {
    console.error(
      `Failed to clear date at ${serverUrl}/api/data/clear-date: `,
      err
    );
  }
};

const clearLink = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/data/clear-link`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    console.log("cleared link: ", json);
    return json;
  } catch (err) {
    console.error(
      `Failed to clear link at ${serverUrl}/api/data/clear-link: `,
      err
    );
  }
};

export { clearDescription, clearDate, clearLink };
