export function diacriticSensitiveRegex(searchText: string) {
  const transformedText = searchText
    .replace(/a/g, '[a,á,à,ä,â,ạ,ã,ầ,ậ,ấ,ẫ,ẩ,ã]')
    .replace(/â/g, '[Â,â,ầ,ậ,ấ,ẫ,ẩ]')
    .replace(/A/g, '[A,a,á,à,ä,â,ạ,ã,â,ầ,ậ,ấ,ẫ,ẩ]')
    .replace(/Â/g, '[â,ầ,ậ,ấ,ẫ,ẩ]')
    .replace(/e/g, '[e,é,ë,è,ẹ,ẽ,ề,ế,ể,ễ,ệ]')
    .replace(/ê/g, '[ê,ê,ề,ế,ể,ễ,ệ]')
    .replace(/E/g, '[E,e,é,ë,è,ẹ,ẽ,ê,ề,ế,ể,ễ,ệ]')
    .replace(/Ê/g, '[Ê,ê,ề,ế,ể,ễ,ệ]')
    .replace(/i/g, '[i,í,ï,ì,ị,ĩ]')
    .replace(/I/g, '[I,i,í,ï,ì,ị,ĩ]')
    .replace(/o/g, '[o,ó,ö,ò,ọ,õ,ợ,ớ,ỡ,ờ,ơ,ở,ồ,ố,ỗ,ổ,ộ]')
    .replace(/ơ/g, '[ơ,ợ,ớ,ỡ,ờ,ở]')
    .replace(/ô/g, '[ô,ồ,ố,ỗ,ổ,ộ]')
    .replace(/O/g, '[o,ó,ö,ò,ọ,õ,ợ,ớ,ỡ,ờ,ơ,ở,ồ,ố,ỗ,ổ,ộ]')
    .replace(/Ơ/g, '[Ơ,ợ,ớ,ỡ,ờ,ơ,ở,]')
    .replace(/Ô/g, '[Ô,ồ,ố,ỗ,ổ,ộ]')
    .replace(/u/g, '[u,ü,ú,ù,ụ,ũ,ư,ữ,ự,ử,ứ,ừ]')
    .replace(/ư/g, '[ư,ự,ử,ứ,ừ,ữ]')
    .replace(/U/g, '[U,u,ü,ú,ù,ụ,ũ,ư,ữ,ự,ử,ứ,ừ]')
    .replace(/Ư/g, '[Ư,ư,ữ,ự,ử,ứ,ừ]');
  console.log(transformedText);
  return transformedText;
}
