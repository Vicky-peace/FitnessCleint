import React, {useContext,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import { Context } from "../../context/userContext/Context";
import  Axios  from "axios";
import "./plans.css";
import { apiDomain } from "../../Utils/Utils";


const Plans = () => {
  const { user } = useContext(Context);
  const [selectPlan, setSelectPlan] = useState(null);
  // useEffect(()=> {
  //   choosePlan();
  // },[]);

const ChoosePlan = async (planId) => {
  await Axios.post(`${apiDomain}/plans/choose`,
  { plan_id: planId },
  {
    headers:{
      Authorization: `${user.token}`,
    },
  })
  .then((response)=>{
    setSelectPlan(response.data);
    console.log(response.data);
  })
  .catch((error)=>{
    console.log(error);
  })
}


  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Discover the Perfect Membership Plan for Your Fitness Journey
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <Link to="/signin">
                  <button className="btn lg"
                  onClick={() =>ChoosePlan (id)}
                  >Choose Plan</button>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
