export class Event {
    title: string;
    dueTo: number;
    selectedClient: Array<Object>;
    time: string;
    description: string;
    done: boolean;
    status: string;

    constructor(obj?: any) {
        this.title = obj ? obj?.title : '';
        this.dueTo = obj ? obj?.dueTo : '';
        this.selectedClient = obj ? obj?.selectedClient : [];
        this.time = obj ? obj.time : '';
        this.description = obj ? obj?.description : '';
        this.done = obj ? obj?.done : '';
        this.status = obj ? obj?.status : '';
    }

    public toJSON() {
        return {
            title: this.title,
            dueTo: this.dueTo,
            selectedClient: this.selectedClient,
            time: this.time,
            description: this.description,
            done: this.done,
            status: this.status
        };
    }

}
