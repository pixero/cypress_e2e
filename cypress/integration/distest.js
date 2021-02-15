import AuthRequest from "../commands/authRequest";


describe('Create require', () => {
    AuthRequest();

    async function getMedia(constraints) {
        let stream = null;

        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            /* используем поток */
        } catch(err) {
            /* обработка ошибки */
        }
    }
    it('create req spec ', function () {
        cy.visit("https://interview-vtb-feature-vtb.dev.skillaz.ru/601a96701f46b7bd77680cd5")
        cy.get(".__checkmark__yrG612pN")
            .click()
        cy.get("button[class='__button__pg9SdY4- __nextStepButton__1yoLOuww __primary__34Ktv1nt']")
            .click()
        // getMedia({ audio: true, video: true })
        navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        // cy.get("label").contains("Все вышеперечисленное")
        // cy.get("label").contains("Все вышеперечисленное").eq(1)
    });
})