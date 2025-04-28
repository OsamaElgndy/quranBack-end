export declare class SendEmailService {
    private transporter;
    constructor();
    main({ phone, password }: {
        phone: string;
        password: string;
    }): Promise<void>;
}
