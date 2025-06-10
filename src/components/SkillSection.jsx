import { useState } from "react"
import { cn } from '@/lib/utils'



const skills = [
    // Frontend
    { name: "HTML/CSS", level: 80, category: "FrontEnd" },
    { name: "Vue Js", level: 50, category: "FrontEnd" },
    { name: "Tailwind CSS", level: 70, category: "FrontEnd" },
    { name: "JavaScript", level: 75, category: "FrontEnd" },

    // BackEnd
    { name: "Golang", level: 80, category: "BackEnd" },
    { name: "Express", level: 60, category: "BackEnd" },
    { name: "PostGreSQL", level: 75, category: "BackEnd" },

    // Tool
    { name: "Git/Github", level: 75, category: "Tool" },
    { name: "Figma", level: 75, category: "Tool" },
    { name: "VsCode", level: 80, category: "Tool" },
]

const categories = ["all", "FrontEnd", "BackEnd", "Tool"]


export const SkillSection = () => {
    const [ActiveCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => ActiveCategory === "all" || skill.category === ActiveCategory)

    return <section id="skill" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((categori, key) => (
                    <button key={key} onClick={() => setActiveCategory(categori)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", ActiveCategory === categori ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forefround hover:bd-secondary")}>
                        {categori}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, Key) => (
                    <div key={Key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out" style={{ width: skill.level + "%" }} />
                        </div>
                        <div className="text-right mt-1 ">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}