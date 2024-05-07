const regex = /(^\[(\d+(,*\s*\d*)*)\] ?)|( ?\[(\d+(,*\s*\d*)*)\])/g;
export const removeCitations = (text: string) => text.replace(regex, "");
