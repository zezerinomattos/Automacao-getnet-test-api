describe('User API Tests', () => {
    const userPayload = {
      name: 'John Doe',
      job: 'Developer',
    };
  
    it('should create a user successfully', () => {
      cy.request({
        method: 'POST',
        url: 'users',
        body: userPayload,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Valida o status code
        expect(response.status).to.eq(201);
  
        // Valida os campos na resposta
        expect(response.body.name).to.eq(userPayload.name);
        expect(response.body.job).to.eq(userPayload.job);
        expect(response.body.id).to.not.be.null;
        expect(response.body.createdAt).to.not.be.null;
      });
    });
  });