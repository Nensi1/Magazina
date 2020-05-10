const invoiceModel = require('../../models/index');

const createInvoice = async (req, res) => {
    try{
        const Invoice = await new invoiceModel.Invoice({ 
            total: req.body.nipt, 
            totalNoVat: req.body.username,
            payment_type: req.body.phone,
            status: req.body.email,
            date: req.body.password
          });
        return res.json({
            message: "Invoice created",
            Invoice: Invoice
        }
        );
    }
    catch (e) {
        res.status(201).json({
            message: 'Error when creating invoice',
            createdInvoice: Invoice
        })
        // res.send('error when creating user: ' + err)
    }
};

exports.createUser = createUser;