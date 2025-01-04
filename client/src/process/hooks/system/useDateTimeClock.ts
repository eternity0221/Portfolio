"use client";
import { useState, useEffect } from "react";
import DateTimeConvert from "@lib/DateTimeConver";

export default function useDateTimeClock(
    dateFormat: string ="Year.Month.Day|Hor:Min:Sec",
    timeSystem: "12" | "24" = "12",
    intervalSeparator: string ="|",
    dateSeparator: string =".",
    timeSeparator: string =":"
){

    // const [currentDate, setCurrentDate] = useState(date);
    const [dateTime, setDateTime] = useState("Loading...");

    useEffect(() => {
        setInterval(() => {
            setDateTime(DateTimeConvert(new Date(), dateFormat, timeSystem, intervalSeparator, dateSeparator, timeSeparator))
        }, 1000);
    }, [dateFormat, timeSystem, dateSeparator, intervalSeparator, timeSeparator]);

    return { dateTime }
}