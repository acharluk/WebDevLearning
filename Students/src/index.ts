// Web interface
import { MainView } from './views/MainView'
import { CourseView } from './views/CourseView'
import { Course } from './core/Course'

let db: any[] = [
    {
        "name": "Math I",
        "description": "No description provided",
        "students": [
            { "name": "Alex", "marks": [100, 90, 97] },
            { "name": "Gum", "marks": [10, 0, 70] },
            { "name": "Missingno", "marks": [45, 85] }
        ]
    },
    {
        "name": "Physics II",
        "description": "No description provided",
        "students": [
            { "name": "Combo", "marks": [0] },
            { "name": "Sirius", "marks": [62, 96, 34, 67, 24] }
        ]
    }
]

let mainV = new MainView()

db.forEach(v => {
    mainV.add(new CourseView(v))
})

mainV.show()