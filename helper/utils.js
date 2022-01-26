export const dateFormat = "YYYY-MM-DD"
export const calendarDateFormat = "YYYY/MM/DD"
export const formatToFixedFloat = (value) => {
    return parseFloat(value.toFixed(2));
};

export const calculateBookingCost = (property, checkinDate, checkoutDate) => {
    console.log("calculateBookingCost");

    let nights,
        propertyFee = 0,
        tax,
        subTotal,
        transactionFee,
        total;

    nights = moment(checkoutDate).diff(moment(checkinDate), "day");
    let currDate = moment(checkinDate).startOf("day");
    let lastDate = moment(checkoutDate).startOf("day");
    do {
        propertyFee += getDayPrice(currDate.clone().toDate());
    } while (currDate.add(1, "days").diff(lastDate) <= 0);

    tax = formatToFloat((tax_rate * propertyFee) / 100);
    subTotal = formatToFloat(
        propertyFee + tax + +cleaning_fee + refundable_amount
    );
    transactionFee = formatToFloat((transactionfee_rate * subTotal) / 100);
    total = formatToFloat((1 + transactionfee_rate / 100) * subTotal);
    return {
        nights,
        propertyFee,
        tax,
        transactionFee,
        cleaningFee: cleaning_fee,
        refundableAmount: refundable_amount,
        total,
    };
};