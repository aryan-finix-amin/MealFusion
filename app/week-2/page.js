import StudentInfo from "./student-info";

export default function Page(){
    return (
        <main className="min-h-screen bg-blue-100">
            <h1 className="text-center p-20 text-5xl font-bold">Welcome to my Page</h1>
            <StudentInfo/>
        </main>
    );
}