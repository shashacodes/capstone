import { useState } from "react";

const useWallet = () => {
  const [walletBalance, setWalletBalance] = useState(500.0);

  const updateWalletBalance = (amount) => {
    setWalletBalance((prevBalance) => prevBalance + amount);
  };

  return {
    walletBalance,
    updateWalletBalance,
  };
};

export default useWallet;
