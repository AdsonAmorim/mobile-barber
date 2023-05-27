import { collection, getDocs } from "firebase/firestore/lite";
import { db as dataBase } from "../firebase/firestore";

const getBarbers = async () => {
  const barbersColumn = collection(dataBase, "barbers");
  const barbersSnapshot = await getDocs(barbersColumn);
  const barbersList = barbersSnapshot.docs.map((doc) => doc.data);

  console.log("@barber", barbersList);

  return barbersList;
};

export { getBarbers };
