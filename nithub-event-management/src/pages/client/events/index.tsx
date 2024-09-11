"use client"

import { useNavigate } from "react-router-dom"
import { NoEvents } from "../../../assets/svg/icons"
import { AddIcon } from "../../../assets/svg/sidebar/svg-export"
import { Button } from "../../../components/ui/Button"
import Navbar from "../../../components/layout/navbar"
import { Sidebar } from "../../../components/layout/sidebar"
import { useState } from "react"
import Category from "../../../components/ui/Category"

export const Events = () => {
  const navigate = useNavigate();
  const [data] = useState([5]);

  return (
    <div >
      <Navbar />
      <Sidebar />
      <div className="pl-36 px-5 md:pr-10">
        {data.length > 0 ?
          <div>
            <Category />
          </div>
          :
          <div className="flex flex-col justify-between gap-5 md:items-center">
            <NoEvents />

            <h2 className="custom-event-heading text-md text-center font-medium leading-[3.5rem]">
              Hi there, your events will appear here as soon as they are created
            </h2>

            <div>
              <Button
                variant="contained"
                label={
                  <div className="flex items-center gap-3">
                    <AddIcon />
                    Create Event
                  </div>
                }
                className="rounded-full"
                onClick={() => navigate("/events/create-event")}
              />
            </div>
          </div>}
      </div>


    </div>
  )
}
