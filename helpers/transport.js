export const getSituationForTransport = (type, km, usager) => {
    return {
        "ngc . transport . deux roues . type": `"${type}"`,
        "ngc . transport . deux roues . km": km,
        "ngc . transport . deux roues . usager": usager
    };
};
