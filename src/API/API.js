export const getParcels = async () => {
  try {
    const result = await fetch(
      "https://hzrq7ak6j3.execute-api.eu-central-1.amazonaws.com/lab_2"

    );
    let data = await result.json();
    data = JSON.parse(data.body)
    return data;
  } catch (e) {
    console.log(e);
  }
};


export const postParcel = async (body) => {
  try {
    const res = await fetch(
      "https://hzrq7ak6j3.execute-api.eu-central-1.amazonaws.com/lab_2",
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
