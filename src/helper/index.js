import axios from "axios";
export const getData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(
        "http://www.mocky.io/v2/5ba8efb23100007200c2750c"
      );

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const fussySearch = (fussyData, search) => {
  const found = [];
  fussyData.forEach((i) => {
    let props = 0;

    for (let prop in i) {
      if (i[prop].toString().toLowerCase().indexOf(search.toLowerCase()) > -1) {
        props++;
      }
    }

    if (props >= 1) {
      found.push(i);
    }
  });

  return found;
};
