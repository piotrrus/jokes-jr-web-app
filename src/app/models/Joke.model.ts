export class Joke {
    date: string;
    url: string;
    id: string;
    joke: string;
    value: string;
    rating: number;

    get _date() {
        return this.date;
    }

    set _date(value) {
        this.date = value;
    }
    get _url() {
        return this.url;
    }

    set _url(value) {
        this.url = value;
    }
    get _id() {
        return this.id;
    }

    set _id(value) {
        this.id = value;
    }
    get _value() {
        return this.value;
    }

    set _value(value) {
        this.value = value;
    }

}
