const DateTimeConvert = (
    date: Date,
    dateFormat: string = "Year.Month.Day|Hor:Min:Sec",
    timeSystem: "12" | "24" = "12",
    intervalSeparator: string = " | ", dateSeparator: string = ".", timeSeparator: string = ":"
): string => {
    const dateObj = new Date(date).toLocaleString("en");

    if (dateFormat.includes("|")) dateFormat = dateFormat.replaceAll(" | ", intervalSeparator);
    if (dateFormat.includes(".")) dateFormat = dateFormat.replaceAll(".", dateSeparator);
    if (dateFormat.includes(":")) dateFormat = dateFormat.replaceAll(":", timeSeparator);

    const YMD = dateObj.split(",")[0];
    const Y = YMD.split(".")[2];
    const M = YMD.split(".")[1];
    const D = YMD.split(".")[0];

    const HMS = dateObj.split(",")[1];
    let Hor = Number(HMS.split(":")[0]);
    Hor = timeSystem == "12" ? Hor % 12 : Hor;
    const Min = HMS.split(":")[1];
    const Sec = HMS.split(":")[2];

    const AMPM = Hor >= 12 ? "PM" : "AM";

    if (dateFormat.includes("Year")) dateFormat = dateFormat.replace("Year", Y);
    if (dateFormat.includes("Month")) dateFormat = dateFormat.replace("Month", M);
    if (dateFormat.includes("Day")) dateFormat = dateFormat.replace("Day", D);

    if (dateFormat.includes("Hor")) dateFormat = dateFormat.replace("Hor", String(Hor));
    if (dateFormat.includes("Min")) dateFormat = dateFormat.replace("Min", Min);
    if (dateFormat.includes("Sec")) dateFormat = dateFormat.replace("Sec", Sec);

    return dateFormat + `${timeSystem == "12" ? ` ${AMPM}` : ""}`;
}
export default DateTimeConvert;