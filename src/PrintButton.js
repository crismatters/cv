import React from 'react';
import './index.css';
import { PictureAsPdf } from '@material-ui/icons'
import { Button } from '@material-ui/core';
import { jsPDF } from 'jspdf';
import html2Canvas from 'html2canvas';

const PrintButton = () => {
    const printPdf = () => {
        const input = document.getElementById("main-content");
        html2Canvas(input).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'px', 'a4');
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
            pdf.save('CV Cristóbal Silva Díaz.pdf');
        });
    }

    return (
        <Button className="float-button" startIcon={<PictureAsPdf />} onClick={printPdf}>
            Save as PDF
        </Button>
    )
}
export default PrintButton;