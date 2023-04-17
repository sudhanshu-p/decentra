import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import Home from "@/pages/Home";
import Compete from "@/pages/Compete";
import Login from "@/pages/Login";
import CheckWallet from "@/pages/CheckWallet";
import SignUP from "@/pages/Signup";
import Choose from "@/pages/Choose";
import OrgLogin from "@/pages/OrganizationLogin";
import StudentLogin from "@/pages/StudentLogin";
import OrganizationSignup from "@/pages/OrganizationSignup";
import OrgCheckWallet from "@/pages/OrgCheckwallet";
import NFT from "@/pages/NFT";

function App() {
  // useEffect(() => {
  //   const wallet = store.wallet;
  //   axios.post("http://localhost:8000/api/student", { Wallet: wallet })
  //     .then((res) => {
  //       console.log(res);
  //     })
  // });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compete" element={<Compete />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkwallet" element={<CheckWallet />} />
      <Route path="/signup" element={<SignUP />} />
      <Route path='/choose' element={<Choose />} />
      <Route path="/login/organization" element={<OrgLogin />} />
      <Route path="/login/student" element={<StudentLogin />} />
      <Route path="/org/signup" element={<OrganizationSignup />} />
      <Route path="/org/checkwallet" element={<OrgCheckWallet />} />
      <Route path="/nft" element={<NFT />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
