import { Button } from "@/components/ui/button";

const ENV_VAR = process.env.NEXT_PUBLIC_TEST_VAR;

const TestButton = ({ children }) => {
    return (
        <Button className="w-fit" onClick={() => alert(ENV_VAR)}>
            {children}
        </Button>
    );
};

export default TestButton;
