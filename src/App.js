import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/shared/footer/Footer";
import { HeaderNavigation } from "./components/shared/headers/HeaderNavigation";
import { HeaderTopArea } from "./components/shared/headers/HeaderTopArea";
import { Career } from "./pages/career/Career";
import { ContactUs } from "./pages/contactUs/ContactUs";
import BusBooking from "./pages/home/BusBooking";
import CarBooking from "./pages/home/CarBooking";
import EventBooking from "./pages/home/EventBooking";
import FlightBooking from "./pages/home/FlightBooking";
import Holidays from "./pages/home/Holidays";
import { Home } from "./pages/home/Home";
import HotelBooking from "./pages/home/HotelBooking";
import Insurance from "./pages/home/Insurance";
import VisaBooking from "./pages/home/VisaBooking";
import Login from "./pages/loginRegister/Login";
import SignUp from "./pages/loginRegister/SignUp";
import FlightBookDetails from "./pages/dynamic/FlightBookDetails";
import BusDetails from "./pages/dynamic/BusDetails";
import HotelDetails from "./pages/dynamic/HotelDetails";
import InsuDetails from "./pages/dynamic/InsuDetails";
import HolidayDetails from "./pages/dynamic/HolidayDetails";
import EventDetails from "./pages/dynamic/EventDetails";
import CustomerBilling from "./pages/billing/CustomerBilling";
import Payment from "./pages/payment/Payment";
import TopDestination from "./pages/topDestination/TopDestination";
import JobSearch from "./pages/JobSearch/JobSearch";
import JobApply from "./pages/jobApply/JobApply";
import CarDetails from "./pages/dynamic/CarDetails";

function App() {
  return (
    <div>
      <Router>
        <HeaderTopArea />
        <HeaderNavigation />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="flight_booking" element={<FlightBooking />} />
            <Route path="bus_booking" element={<BusBooking />} />
            <Route path="Hotel_booking" element={<HotelBooking />} />
            <Route path="insurance_booking" element={<Insurance />} />
            <Route path="holiday_booking" element={<Holidays />} />
            <Route path="event_booking" element={<EventBooking />} />
            <Route path="car_booking" element={<CarBooking />} />
            <Route path="visa_booking" element={<VisaBooking />} />
          </Route>

          {/*-------- dynamic pages ---------  */}
          <Route path="/flight_details" element={<FlightBookDetails />} />
          <Route path="/bus_details" element={<BusDetails />} />
          <Route path="/hotel_details" element={<HotelDetails />} />
          <Route path="/insurance_details" element={<InsuDetails />} />
          <Route path="/holiday_details" element={<HolidayDetails />} />
          <Route path="/event_details" element={<EventDetails />} />
          <Route path="/car_details" element={<CarDetails />} />
          {/* ----------------------- */}

          <Route path="/customer_billing" element={<CustomerBilling />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/top_destination" element={<TopDestination />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/job_search" element={<JobSearch />} />
          <Route path="/job_apply" element={<JobApply />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
