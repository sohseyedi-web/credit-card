import { useContext, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const CardContext = createContext();
export const CardContextDispatch = createContext();

const initialState = {
  cardItems: [],
};

const CardReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_CARD": {
      const newData = {
        id: uuidv4(),
        values: actions.payload,
        createdAt: new Date().toLocaleDateString("fa-IR"),
      };
      const addNewItem = [...state.cardItems, newData];
      console.log(addNewItem);
      return { ...state, cardItems: addNewItem };
    }
    case "REMOVE_CARD": {
      const item = [...state.cardItems];
      const filterItem = item.filter((i) => i.id !== actions.payload.id);
      return { ...state, cardItems: filterItem };
    }
    default:
      return state;
  }
};

const CardProvider = ({ children }) => {
  const [card, dispatch] = useReducer(CardReducer, initialState);

  return (
    <CardContext.Provider value={card}>
      <CardContextDispatch.Provider value={dispatch}>
        {children}
      </CardContextDispatch.Provider>
    </CardContext.Provider>
  );
};

export default CardProvider;

export const useCard = () => useContext(CardContext);
export const useCardDispatch = () => useContext(CardContextDispatch);
