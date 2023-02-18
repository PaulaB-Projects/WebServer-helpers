import { readFileSync as read } from 'node:fs';

const ENCODING = 'utf8';
const PATH = './data/'

export default file_name =>
	JSON.parse(read(`${ PATH }${ file_name }.json`, ENCODING));
