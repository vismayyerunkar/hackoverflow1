import React from "react";
import "../styles/rentalMarket.css";
import Card from "./Card";
import Navbar from "./Navbar";

function RentalMarket() {
  const list = [
    {
      owner: "Lavlesh singh",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrplKOl5-JKxVkjMfTyH8SlQ9rVcs9Tyhw9KhoJhOGQ&usqp=CAU&ec=48600112",
      rent: 2000,
      location: "Panvel",
      tool: "Tractor",
      phoneNumber: 773864525,
    },
    {
      owner: "Vismay",
      imageUrl:
        "http://nevonprojects.com/wp-content/uploads/2021/05/nevon-diy-power-tiller-machine-web1.jpg",
      rent: 500,
      location: "Panvel",
      tool: "Power Tiller",
      phoneNumber: 773864525,
    },
    {
      owner: "Anish Ghogare",
      imageUrl: "https://gip.om/uploads/products/img_396_1635079444.png",
      rent: 400,
      location: "Panvel",
      tool: "Mini weeder",
      phoneNumber: 773864525,
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="rental-heading">
        <h2>
        Rental Market Place
        </h2>

        <a href="/createRental" className="Add-More-btn">Create <i class="fa-solid fa-circle-plus"></i></a>
    </div>
      <div className="rental-market">
        {list.map((item) => {
          return (
            <>
              <Card
                owner={item.owner}
                imgUrl={item.imageUrl}
                rent={item.rent}
                location={item.location}
                tool={item.tool}
                phoneNumber={item.phoneNumber}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default RentalMarket;
