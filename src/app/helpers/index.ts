import * as moment from "moment";
moment.locale("pt-br");

export const parseToDayAndMoth = date => moment(date).format("DD/MM");
