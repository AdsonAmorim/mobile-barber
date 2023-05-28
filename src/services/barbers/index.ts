import { collection, getDocs } from "firebase/firestore";
import { BarberContainerProps } from "../../types";
import { db as dataBase } from "../firebase/firestore";

const getBarbers = async () => {
  const barbersColumn = collection(dataBase, "barbers");
  const barbersSnapshot = await getDocs(barbersColumn);
  const barbersList = barbersSnapshot.docs.map((snapshot) => ({
    ...(snapshot.data() as BarberContainerProps),
    id: snapshot.id,
  }));

  console.log("@barbers", JSON.stringify(barbersList));

  return barbersList;
};

export { getBarbers };
