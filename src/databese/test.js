const Database = require('./db')
const creatProffy = require('./creatProffy')


Database.then( async (db) => {
    // Inserir dados

    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp: '1010101010101',
        bio: 'Entusiasta das melhores tecnologias de artes avançada. Apaixonado por CSS e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas aulas.',
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        // O proffy_id virá com pelo banco de dados.
    }

    classScheduleValues = [
        // class_id cirá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to:1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to:1220,
        }
    ]

    //await creatProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consulltoar os dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // Consultar as classes de um determinado proffy
    // e trazer junto os daddos do proffy
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;   
    `)
    //console.log(selectedClassesAndProffys)

    // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // O horário do tima_from (8h) precisa ser menor ou igual ao horário solicitado
    // O time_to precisa ser acima?
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    console.log(selectClassesSchedules)

})