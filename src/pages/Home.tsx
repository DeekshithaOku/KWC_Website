import staticbackground from "../assets/background.png";

export const Home = () => {
    return (
        <main
            className="w-full h-screen bg-cover bg-center relative overflow-hidden"
            style={{
                backgroundImage: `url(${staticbackground})`,
            }}
        >
            <div className="absolute inset-0 overflow-y-auto">
                <div className="min-h-screen px-28 pt-8">
                   

                </div>
            </div>
        </main>
    );
};
