"use client";
import { useState, useEffect } from "react";
import DateTimeConvert from "@lib/DateTimeConver";

export default function useDateTimeClock(
    dateFormat: string ="Year.Month.Day|Hor:Min:Sec",
    intervalSeparator: string ="|",
    dateSeparator: string =".",
    timeSeparator: string =":"
){

    // const [currentDate, setCurrentDate] = useState(date);
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            setDateTime(DateTimeConvert(new Date(), dateFormat, intervalSeparator, dateSeparator, timeSeparator))
        }, 1000);
    }, [dateFormat, dateSeparator, intervalSeparator, timeSeparator]);

    return { dateTime }
}