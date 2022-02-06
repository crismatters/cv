import * as pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as colors from '../assets/colors';

export const printDoc = ({ personalData, sections }) => {
    var content = [];
    content.push(personalDataToContent(personalData));
    sectionsToContent(sections, content);
    var document = {
        pageSize: "A4",
        pageOrientation: "portrait",
        pageMargins: [30, 30, 30, 30],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10],
                color: colors.blue[700]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5],
                color: colors.gray[700]
            },
            itemTitle: {
                fontSize: 14,
                margin: [0, 0, 0, 10],
                color: colors.blue[700]
            },
            itemSubtitle: {
                fontSize: 12,
                margin: [0, 0, 0, 10],
                color: colors.red[700]
            },
            metadata: {
                margin: [0, 0, 0, 10],
                color: colors.yellow[700]
            },
            table: {
                margin: [0, 5, 0, 15],
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: colors.blue[700]
            },
            footer: {
                bold: true,
                fontSize: 11,
                color: 'gray'
            },
            contact: {
                fontSize: 13,
                color: colors.blue[700]
            }
        },
        content
    };
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    pdfmake.createPdf(document).download("CV Cristobal.pdf");
}

const sectionsToContent = (sections, mainDoc) => {
    sections.forEach(section => {
        if (section.type === "common-list") mainDoc.push(commonListToContent(section));
        if (section.type === "tags-list") mainDoc.push(tagsListToContent(section));
    });
}

const tagsListToContent = (section) => {
    var content = {
        layout: 'lightHorizontalLines',
        style: "table",
        table: {
            body: [
                [{ text: section.title, style: "header" }],
                [{ stack: [{ ul: section.items }] }]
            ]
        }
    }
    return content;
}

const commonListToContent = (section) => {
    var content = {
        layout: 'lightHorizontalLines',
        style: "table",
        table: {
            body: [
                [{ text: section.title, style: "header", colSpan: 3 }, {}, {}],
            ]
        }
    }
    section.items.forEach(item => {
        content.table.body.push([
            {
                stack: [
                    {
                        type: "none",
                        ul: [
                            { text: item.title ? item.title : item.authority, style: 'itemTitle' },
                            { text: item.authorityMeta ? item.authorityMeta : item.authority, style: 'itemSubtitle', link: item.authorityWebSite }
                        ]
                    }
                ]
            },
            { text: item.description },
            { text: item.meta, style: "metadata" }
        ]);
    });
    return content;
}

const personalDataToContent = (personalData) => {
    var content = {
        style: "table",
        table: {
            widths: [300, 200],
            body: [
                [
                    {
                        stack: [
                            {
                                type: "none",
                                ul: [
                                    { text: personalData.name, style: 'header' },
                                    { text: personalData.title, style: 'subheader' }
                                ]
                            }
                        ]
                    },
                    {
                        stack: [
                            {
                                ul: personalData.contacts.map(contact => ({ text: contact.value, style: "contact", link: (!contact.mail && !contact.location ? "https://" + contact.value : null) }))
                            },
                        ]
                    }
                ],
            ]
        },
        layout: 'noBorders'
    }
    return content;
}

